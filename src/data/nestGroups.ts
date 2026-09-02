import type { KnowledgeGroup } from "../types/knowledge";

export const nestGroups: KnowledgeGroup[] = [
  {
    label: "Nhóm 1",
    title: "NestJS cơ bản & Kiến trúc",
    cards: [
      {
        id: "nest-intro",
        title: "NestJS là gì",
        description: "NestJS là framework Node.js cho server-side applications. Lấy cảm hứng từ Angular: TypeScript, decorators, dependency injection, modular architecture. Bên dưới dùng Express (hoặc Fastify). Tổ chức code rõ ràng, scalable.",
        exampleText: "Cài CLI: npm i -g @nestjs/cli. Tạo project: nest new my-app.",
        codeBlocks: [
          { title: "Tạo project", code: "npm i -g @nestjs/cli\nnest new my-app\ncd my-app\nnpm run start:dev\n\n# Cấu trúc\nsrc/\n ┣ app.module.ts      ← Root module\n ┣ app.controller.ts  ← Controller mẫu\n ┣ app.service.ts     ← Service mẫu\n ┗ main.ts            ← Entry point\n\n# Generate resource (tạo CRUD tự động)\nnest g resource users\n# → Tạo: module, controller, service, DTO, entities" }
        ]
      },
      {
        id: "nest-architecture",
        title: "Kiến trúc tổng quan",
        description: "NestJS theo mô hình Module → Controller → Service. Module gom nhóm feature. Controller xử lý HTTP request. Service chứa business logic. Dependency Injection tự động tiêm service vào controller.",
        exampleText: "Mọi thứ trong NestJS đều nằm trong Module. Mỗi feature (users, products) có module riêng.",
        codeBlocks: [
          { title: "Luồng xử lý", code: "// Request → Middleware → Guard → Interceptor (before)\n//   → Pipe → Controller → Service → Database\n//   → Interceptor (after) → Response\n//   → Exception Filter (nếu có lỗi)\n\n// Thứ tự thực thi:\n// 1. Middleware (logging, cors)\n// 2. Guards (auth check)\n// 3. Interceptors (before - transform request)\n// 4. Pipes (validation, transform)\n// 5. Controller + Service (xử lý logic)\n// 6. Interceptors (after - transform response)\n// 7. Exception Filters (bắt lỗi)" }
        ]
      },
      {
        id: "nest-module",
        title: "Module (@Module)",
        description: "Module là đơn vị tổ chức code. Gom controllers, providers, imports, exports. Root module (AppModule) là điểm bắt đầu. imports: module khác cần dùng. exports: cho module khác import service.",
        exampleText: "nest g module users tạo UsersModule tự động và đăng ký vào AppModule.",
        codeBlocks: [
          { title: "Ví dụ", code: "import { Module } from '@nestjs/common';\nimport { UsersController } from './users.controller';\nimport { UsersService } from './users.service';\n\n@Module({\n  imports: [],              // Module phụ thuộc\n  controllers: [UsersController], // Controllers\n  providers: [UsersService],     // Services\n  exports: [UsersService],       // Cho module khác dùng\n})\nexport class UsersModule {}\n\n// AppModule (root)\n@Module({\n  imports: [\n    UsersModule,\n    ProductsModule,\n    AuthModule,\n    ConfigModule.forRoot(), // Config toàn cục\n  ],\n})\nexport class AppModule {}" }
        ]
      },
      {
        id: "nest-controller",
        title: "Controller (@Controller)",
        description: "Controller xử lý HTTP request. Decorators: @Get(), @Post(), @Put(), @Patch(), @Delete(). Params: @Param(), @Body(), @Query(), @Headers(). Response: trả object → tự chuyển thành JSON.",
        exampleText: "nest g controller users --no-spec tạo controller không có file test.",
        codeBlocks: [
          { title: "CRUD Controller", code: "import { Controller, Get, Post, Put, Delete,\n  Param, Body, Query, HttpCode, HttpStatus } from '@nestjs/common';\nimport { UsersService } from './users.service';\nimport { CreateUserDto, UpdateUserDto } from './dto';\n\n@Controller('users') // Prefix: /users\nexport class UsersController {\n  constructor(private readonly usersService: UsersService) {}\n\n  @Get()                    // GET /users?page=1&limit=10\n  findAll(@Query('page') page: number, @Query('limit') limit: number) {\n    return this.usersService.findAll(page, limit);\n  }\n\n  @Get(':id')               // GET /users/:id\n  findOne(@Param('id') id: string) {\n    return this.usersService.findOne(id);\n  }\n\n  @Post()                   // POST /users\n  @HttpCode(HttpStatus.CREATED)\n  create(@Body() dto: CreateUserDto) {\n    return this.usersService.create(dto);\n  }\n\n  @Put(':id')               // PUT /users/:id\n  update(@Param('id') id: string, @Body() dto: UpdateUserDto) {\n    return this.usersService.update(id, dto);\n  }\n\n  @Delete(':id')            // DELETE /users/:id\n  @HttpCode(HttpStatus.NO_CONTENT)\n  remove(@Param('id') id: string) {\n    return this.usersService.remove(id);\n  }\n}" }
        ]
      },
      {
        id: "nest-service",
        title: "Service & Dependency Injection",
        description: "Service chứa business logic, đánh dấu @Injectable(). Inject vào controller qua constructor (NestJS tự tạo instance). Singleton mặc định. Tách logic khỏi controller giúp code testable.",
        exampleText: null,
        codeBlocks: [
          { title: "Ví dụ", code: "import { Injectable, NotFoundException } from '@nestjs/common';\nimport { InjectRepository } from '@nestjs/typeorm';\nimport { Repository } from 'typeorm';\nimport { User } from './entities/user.entity';\nimport { CreateUserDto } from './dto/create-user.dto';\n\n@Injectable()\nexport class UsersService {\n  constructor(\n    @InjectRepository(User)\n    private usersRepo: Repository<User>,\n  ) {}\n\n  async findAll(page = 1, limit = 10) {\n    const [data, total] = await this.usersRepo.findAndCount({\n      skip: (page - 1) * limit,\n      take: limit,\n      order: { createdAt: 'DESC' },\n    });\n    return { data, total, page, limit };\n  }\n\n  async findOne(id: string) {\n    const user = await this.usersRepo.findOneBy({ id });\n    if (!user) throw new NotFoundException(`User #${id} not found`);\n    return user;\n  }\n\n  async create(dto: CreateUserDto) {\n    const user = this.usersRepo.create(dto);\n    return this.usersRepo.save(user);\n  }\n\n  async remove(id: string) {\n    const result = await this.usersRepo.delete(id);\n    if (result.affected === 0) throw new NotFoundException();\n  }\n}" }
        ]
      }
    ]
  },
  {
    label: "Nhóm 2",
    title: "DTO, Validation & Pipes",
    cards: [
      {
        id: "nest-dto",
        title: "DTO & class-validator",
        description: "DTO (Data Transfer Object) định nghĩa shape data gửi đến. Kết hợp class-validator để validate tự động. Tạo CreateDto và UpdateDto (Partial) cho mỗi resource.",
        exampleText: "Cài: npm i class-validator class-transformer.",
        codeBlocks: [
          { title: "Ví dụ", code: "// dto/create-user.dto.ts\nimport { IsString, IsEmail, MinLength, IsOptional, IsEnum } from 'class-validator';\n\nexport class CreateUserDto {\n  @IsString()\n  @MinLength(2)\n  name: string;\n\n  @IsEmail()\n  email: string;\n\n  @IsString()\n  @MinLength(6)\n  password: string;\n\n  @IsOptional()\n  @IsEnum(['user', 'admin'])\n  role?: string;\n}\n\n// dto/update-user.dto.ts\nimport { PartialType } from '@nestjs/mapped-types';\n\nexport class UpdateUserDto extends PartialType(CreateUserDto) {}\n// → Tất cả fields trở thành optional" },
          { title: "Bật global validation", code: "// main.ts\nimport { ValidationPipe } from '@nestjs/common';\n\nasync function bootstrap() {\n  const app = await NestFactory.create(AppModule);\n\n  app.useGlobalPipes(new ValidationPipe({\n    whitelist: true,       // Bỏ field không có trong DTO\n    forbidNonWhitelisted: true, // Throw nếu có field lạ\n    transform: true,       // Auto chuyển kiểu (string → number)\n  }));\n\n  await app.listen(3000);\n}" }
        ]
      },
      {
        id: "nest-pipe",
        title: "Pipes (Transform & Validate)",
        description: "Pipe biến đổi hoặc validate input trước khi vào handler. Built-in: ValidationPipe, ParseIntPipe, ParseUUIDPipe, ParseBoolPipe, DefaultValuePipe. Custom pipe implement PipeTransform.",
        exampleText: null,
        codeBlocks: [
          { title: "Built-in Pipes", code: "// ParseIntPipe: string → number\n@Get(':id')\nfindOne(@Param('id', ParseIntPipe) id: number) {\n  return this.service.findOne(id);\n}\n// GET /users/abc → 400 Bad Request\n// GET /users/123 → id = 123 (number)\n\n// ParseUUIDPipe\n@Get(':id')\nfindOne(@Param('id', ParseUUIDPipe) id: string) { }\n\n// DefaultValuePipe\n@Get()\nfindAll(\n  @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,\n  @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,\n) {\n  return this.service.findAll(page, limit);\n}" }
        ]
      },
      {
        id: "nest-exception",
        title: "Exception & Exception Filters",
        description: "NestJS có sẵn HTTP exceptions: NotFoundException, BadRequestException, UnauthorizedException, ForbiddenException... Custom exception filter để format lỗi theo ý.",
        exampleText: null,
        codeBlocks: [
          { title: "Built-in Exceptions", code: "import { NotFoundException, BadRequestException,\n  UnauthorizedException, ForbiddenException,\n  ConflictException } from '@nestjs/common';\n\n// Dùng trong service\nthrow new NotFoundException('User not found');\nthrow new BadRequestException('Invalid email');\nthrow new UnauthorizedException('Please login');\nthrow new ForbiddenException('No permission');\nthrow new ConflictException('Email already exists');\n\n// Response tự động:\n// { statusCode: 404, message: 'User not found', error: 'Not Found' }" },
          { title: "Custom Exception Filter", code: "@Catch()\nexport class AllExceptionsFilter implements ExceptionFilter {\n  catch(exception: unknown, host: ArgumentsHost) {\n    const ctx = host.switchToHttp();\n    const res = ctx.getResponse();\n    const status = exception instanceof HttpException\n      ? exception.getStatus() : 500;\n\n    res.status(status).json({\n      success: false,\n      statusCode: status,\n      message: exception instanceof Error ? exception.message : 'Error',\n      timestamp: new Date().toISOString(),\n    });\n  }\n}\n\n// main.ts\napp.useGlobalFilters(new AllExceptionsFilter());" }
        ]
      }
    ]
  },
  {
    label: "Nhóm 3",
    title: "Guards, Interceptors & Middleware",
    cards: [
      {
        id: "nest-guard",
        title: "Guard (Authentication/Authorization)",
        description: "Guard quyết định request có được phép hay không. CanActivate return true/false. Chạy SAU middleware, TRƯỚC pipe. Dùng cho auth check, role check.",
        exampleText: null,
        codeBlocks: [
          { title: "JWT Auth Guard", code: "import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';\nimport { JwtService } from '@nestjs/jwt';\n\n@Injectable()\nexport class JwtAuthGuard implements CanActivate {\n  constructor(private jwtService: JwtService) {}\n\n  async canActivate(context: ExecutionContext): Promise<boolean> {\n    const request = context.switchToHttp().getRequest();\n    const token = request.headers.authorization?.split(' ')[1];\n\n    if (!token) throw new UnauthorizedException();\n\n    try {\n      request.user = await this.jwtService.verifyAsync(token);\n      return true;\n    } catch {\n      throw new UnauthorizedException();\n    }\n  }\n}\n\n// Sử dụng\n@UseGuards(JwtAuthGuard)\n@Get('profile')\ngetProfile(@Request() req) {\n  return req.user;\n}" },
          { title: "Role Guard", code: "import { SetMetadata } from '@nestjs/common';\n\n// Custom decorator\nexport const Roles = (...roles: string[]) => SetMetadata('roles', roles);\n\n@Injectable()\nexport class RolesGuard implements CanActivate {\n  constructor(private reflector: Reflector) {}\n\n  canActivate(context: ExecutionContext): boolean {\n    const roles = this.reflector.get<string[]>('roles', context.getHandler());\n    if (!roles) return true;\n    const { user } = context.switchToHttp().getRequest();\n    return roles.includes(user.role);\n  }\n}\n\n// Sử dụng\n@UseGuards(JwtAuthGuard, RolesGuard)\n@Roles('admin')\n@Delete(':id')\nremove(@Param('id') id: string) { }" }
        ]
      },
      {
        id: "nest-interceptor",
        title: "Interceptor",
        description: "Interceptor chạy trước/sau handler. Dùng để: transform response, logging, caching, timeout. Mạnh hơn middleware vì có access to ExecutionContext và RxJS Observable.",
        exampleText: null,
        codeBlocks: [
          { title: "Response Transform", code: "import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';\nimport { map } from 'rxjs/operators';\n\n// Wrap response: { success: true, data: {...} }\n@Injectable()\nexport class TransformInterceptor implements NestInterceptor {\n  intercept(context: ExecutionContext, next: CallHandler) {\n    return next.handle().pipe(\n      map(data => ({\n        success: true,\n        data,\n        timestamp: new Date().toISOString(),\n      })),\n    );\n  }\n}\n\n// Logging Interceptor (tính thời gian xử lý)\n@Injectable()\nexport class LoggingInterceptor implements NestInterceptor {\n  intercept(context: ExecutionContext, next: CallHandler) {\n    const now = Date.now();\n    return next.handle().pipe(\n      tap(() => console.log(`${Date.now() - now}ms`)),\n    );\n  }\n}\n\n// main.ts\napp.useGlobalInterceptors(new TransformInterceptor());" }
        ]
      },
      {
        id: "nest-custom-decorator",
        title: "Custom Decorators",
        description: "Tạo decorator riêng để giảm boilerplate. createParamDecorator() tạo parameter decorator. Compose nhiều decorators bằng applyDecorators().",
        exampleText: "Ví dụ: @CurrentUser() lấy user từ request thay vì @Request() rồi req.user.",
        codeBlocks: [
          { title: "Ví dụ", code: "import { createParamDecorator, ExecutionContext, applyDecorators } from '@nestjs/common';\n\n// @CurrentUser() - lấy user từ request\nexport const CurrentUser = createParamDecorator(\n  (data: string, ctx: ExecutionContext) => {\n    const request = ctx.switchToHttp().getRequest();\n    const user = request.user;\n    return data ? user?.[data] : user;\n  },\n);\n\n// Sử dụng\n@Get('profile')\ngetProfile(@CurrentUser() user: User) {\n  return user;\n}\n\n@Get('name')\ngetName(@CurrentUser('name') name: string) {\n  return { name };\n}\n\n// Compose decorators\nexport function Auth(...roles: string[]) {\n  return applyDecorators(\n    UseGuards(JwtAuthGuard, RolesGuard),\n    Roles(...roles),\n    ApiBearerAuth(),\n  );\n}\n\n@Auth('admin')  // 1 decorator thay vì 3\n@Delete(':id')\nremove() { }" }
        ]
      }
    ]
  },
  {
    label: "Nhóm 4",
    title: "Database & Config",
    cards: [
      {
        id: "nest-typeorm",
        title: "TypeORM Integration",
        description: "TypeORM là ORM phổ biến nhất với NestJS. Dùng decorators để định nghĩa Entity (bảng DB). @nestjs/typeorm package cung cấp module tích hợp sẵn.",
        exampleText: "Cài: npm i @nestjs/typeorm typeorm pg (PostgreSQL).",
        codeBlocks: [
          { title: "Entity & Config", code: "// entities/user.entity.ts\nimport { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';\n\n@Entity()\nexport class User {\n  @PrimaryGeneratedColumn('uuid')\n  id: string;\n\n  @Column()\n  name: string;\n\n  @Column({ unique: true })\n  email: string;\n\n  @Column({ select: false }) // Không trả về mặc định\n  password: string;\n\n  @Column({ default: 'user' })\n  role: string;\n\n  @CreateDateColumn()\n  createdAt: Date;\n}\n\n// app.module.ts\nTypeOrmModule.forRoot({\n  type: 'postgres',\n  host: 'localhost',\n  port: 5432,\n  database: 'mydb',\n  entities: [User],\n  synchronize: true, // Chỉ dùng cho dev!\n})" }
        ]
      },
      {
        id: "nest-relations",
        title: "Relations (OneToMany, ManyToOne)",
        description: "TypeORM hỗ trợ quan hệ: OneToOne, OneToMany, ManyToOne, ManyToMany. Dùng relations option hoặc QueryBuilder để load relation data.",
        exampleText: null,
        codeBlocks: [
          { title: "Ví dụ", code: "// User có nhiều Posts\n@Entity()\nexport class User {\n  @PrimaryGeneratedColumn()\n  id: number;\n\n  @Column()\n  name: string;\n\n  @OneToMany(() => Post, post => post.author)\n  posts: Post[];\n}\n\n@Entity()\nexport class Post {\n  @PrimaryGeneratedColumn()\n  id: number;\n\n  @Column()\n  title: string;\n\n  @ManyToOne(() => User, user => user.posts)\n  author: User;\n}\n\n// Query với relations\nconst user = await this.usersRepo.findOne({\n  where: { id },\n  relations: ['posts'],  // Load posts\n});\n\n// QueryBuilder (phức tạp hơn)\nconst users = await this.usersRepo\n  .createQueryBuilder('user')\n  .leftJoinAndSelect('user.posts', 'post')\n  .where('user.role = :role', { role: 'admin' })\n  .getMany();" }
        ]
      },
      {
        id: "nest-config",
        title: "ConfigModule & Environment",
        description: "@nestjs/config quản lý env variables. Load từ .env file. Inject ConfigService để truy cập. Type-safe configuration với validation.",
        exampleText: "Cài: npm i @nestjs/config.",
        codeBlocks: [
          { title: "Ví dụ", code: "// app.module.ts\nimport { ConfigModule, ConfigService } from '@nestjs/config';\n\n@Module({\n  imports: [\n    ConfigModule.forRoot({\n      isGlobal: true,  // Không cần import lại ở mỗi module\n      envFilePath: '.env',\n    }),\n    TypeOrmModule.forRootAsync({\n      inject: [ConfigService],\n      useFactory: (config: ConfigService) => ({\n        type: 'postgres',\n        host: config.get('DB_HOST'),\n        port: config.get<number>('DB_PORT'),\n        database: config.get('DB_NAME'),\n        // ...\n      }),\n    }),\n  ],\n})\nexport class AppModule {}\n\n// Sử dụng trong service\n@Injectable()\nexport class AuthService {\n  constructor(private config: ConfigService) {}\n\n  getJwtSecret() {\n    return this.config.get<string>('JWT_SECRET');\n  }\n}" }
        ]
      },
      {
        id: "nest-swagger",
        title: "Swagger / OpenAPI",
        description: "@nestjs/swagger tự động tạo API documentation. Dùng decorators trong DTO và Controller. Tạo UI test API tại /api (hoặc path tùy chọn).",
        exampleText: "Cài: npm i @nestjs/swagger.",
        codeBlocks: [
          { title: "Setup", code: "// main.ts\nimport { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';\n\nconst config = new DocumentBuilder()\n  .setTitle('My API')\n  .setDescription('API documentation')\n  .setVersion('1.0')\n  .addBearerAuth()\n  .build();\n\nconst document = SwaggerModule.createDocument(app, config);\nSwaggerModule.setup('api', app, document);\n// → Truy cập http://localhost:3000/api\n\n// Decorators trong DTO\nimport { ApiProperty } from '@nestjs/swagger';\n\nexport class CreateUserDto {\n  @ApiProperty({ example: 'An', description: 'Tên user' })\n  name: string;\n\n  @ApiProperty({ example: 'an@mail.com' })\n  email: string;\n}\n\n// Controller\n@ApiTags('users')\n@Controller('users')\nexport class UsersController {\n  @ApiOperation({ summary: 'Get all users' })\n  @ApiResponse({ status: 200, description: 'List of users' })\n  @Get()\n  findAll() { }\n}" }
        ]
      }
    ]
  }

,
  {
  "label": "Nhóm 5",
  "title": "Security & Database",
  "cards": [
    {
      "id": "nest-guards",
      "title": "Guards (Phân quyền)",
      "description": "Guards trong NestJS chịu trách nhiệm quyết định xem một request có được phép đi tiếp tới Controller hay không (Thường dùng cho Authentication / Authorization).",
      "exampleText": "Tạo Guard bằng implements CanActivate. Kích hoạt bằng @UseGuards().",
      "codeBlocks": [
        {
          "title": "Ví dụ",
          "code": "import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';\n\n@Injectable()\nexport class AuthGuard implements CanActivate {\n  canActivate(context: ExecutionContext): boolean {\n    const request = context.switchToHttp().getRequest();\n    return request.headers.authorization === 'secret-token';\n  }\n}\n\n// Trong Controller\n@UseGuards(AuthGuard)\n@Get('profile')\ngetProfile() {\n  return 'Bí mật';\n}"
        }
      ]
    },
    {
      "id": "nest-orm",
      "title": "Tích hợp ORM (TypeORM / Prisma)",
      "description": "NestJS hiếm khi viết truy vấn SQL chay mà thường dùng ORM để ánh xạ Object thành Table trong Database. TypeORM và Prisma là 2 lựa chọn phổ biến nhất hiện nay.",
      "exampleText": "TypeORM thường dùng @Entity() decorator. Prisma dùng file schema.prisma riêng.",
      "codeBlocks": [
        {
          "title": "Ví dụ (TypeORM)",
          "code": "import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';\n\n@Entity()\nexport class User {\n  @PrimaryGeneratedColumn()\n  id: number;\n\n  @Column()\n  name: string;\n\n  @Column({ default: true })  isActive: boolean;\n}"
        }
      ]
    }
  ]
}];
