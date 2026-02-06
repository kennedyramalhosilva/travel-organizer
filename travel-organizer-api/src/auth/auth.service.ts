import { Injectable, UnauthorizedException } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { JwtService } from '@nestjs/jwt'
import * as bcrypt from 'bcrypt'

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
  ) {}

  async register(name: string, email: string, password: string) {
    const hash = await bcrypt.hash(password, 10)

    const user = await this.prisma.user.create({
      data: { name, email, password: hash },
    })

    return { id: user.id, email: user.email }
  }

  async login(email: string, password: string) {
    const user = await this.prisma.user.findUnique({ where: { email } })

    if (!user) throw new UnauthorizedException('Credenciais inválidas')

    const valid = await bcrypt.compare(password, user.password)
    if (!valid) throw new UnauthorizedException('Credenciais inválidas')

    const token = this.jwt.sign({
      sub: user.id,
      email: user.email,
    })

    return { access_token: token }
  }

  async getMe(userId: number) {
    return this.prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        name: true,
        email: true,
      }
    });
  }
}
