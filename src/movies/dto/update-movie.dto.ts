// 방법1: partial types
import { PartialType } from '@nestjs/mapped-types';
import { CreateMovieDTO } from './create-movie.dto';

export class UpdateMovieDTO extends PartialType(CreateMovieDTO) {}

// 방법2
// import { IsString, IsNumber } from 'class-validator';

// export class UpdateMovieDTO {
//   // 모든 대상들은 필수가 아니기 때문에 ?:
//   @IsString()
//   readonly title?: string;

//   @IsNumber()
//   readonly year?: number;

//   @IsString({ each: true }) // 모든 요소를 검사
//   readonly genres?: string[];
// }
