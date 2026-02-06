import { Body, Controller, Get, Post, UseGuards, Request } from '@nestjs/common'; // Adicionei o Request aqui
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { JwtAuthGuard } from './jwt-auth.guard'; // Verifique se o nome do arquivo é esse mesmo (as vezes é jwt.guard.ts)

@Controller('auth')
export class AuthController {
  constructor(private auth: AuthService) {}

  @Post('register')
  register(@Body() dto: RegisterDto) {
    return this.auth.register(dto.name, dto.email, dto.password);
  }

  @Post('login')
  login(@Body() body: any) {
    return this.auth.login(body.email, body.password);
  }

  @UseGuards(JwtAuthGuard)
  @Get('me')
  getProfile(@Request() req: any) { // Aqui o @Request vem do NestJS
    return this.auth.getMe(req.user.userId);
  }
}