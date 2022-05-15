// import { Module } from "@nestjs/common";
// import { PassportModule } from "@nestjs/passport";
// import { UsersModule } from "src/users/users.module";


// @Module({
//     imports:[
//       PassportModule.register({
//           defaultStrategy: 'jwt',
//           property: 'user',
//           session: false,
//       }),
//     ],
//     controllers: [AuthController],
//     providers: [AuthService,JwtStra],
//     exports: [PassportModule],
// })
// export class AuthModule {}