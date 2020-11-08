import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMovieDTO } from './dto/create-movie.dto';
import { UpdateMovieDTO } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAll(): Movie[] {
    return this.movies;
  }

  getOne(id: number): Movie {
    const slectMovie = this.movies.find((movie) => movie.id === id);
    if (!slectMovie) {
      throw new NotFoundException(`Movie with ID ${id} not found`);
    } else {
      return slectMovie;
    }
  }

  deleteOne(id: number): boolean {
    this.getOne(id); // 있는지 확인
    this.movies = this.movies.filter((movie) => movie.id !== id);
    return true;
  }

  create(movieData: CreateMovieDTO) {
    this.movies.push({
      id: this.movies.length + 1,
      ...movieData,
    });
  }

  patch(movieId: number, updateData: UpdateMovieDTO) {
    const movie = this.getOne(movieId);
    this.deleteOne(movieId);
    this.movies.push({ ...movie, ...updateData });
  }
}
