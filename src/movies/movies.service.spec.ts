import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { MoviesService } from './movies.service';

describe('MoviesService', () => {
  let service: MoviesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoviesService],
    }).compile();

    service = module.get<MoviesService>(MoviesService);
    service.create({
      title: 'Test Movie',
      genres: ['test'],
      year: 2000,
    });
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getAll()', () => {
    it('should return an array', () => {
      const result = service.getAll();
      expect(result).toBeInstanceOf(Array);
    });
  });

  describe('getOne()', () => {
    it('should return a movie', () => {
      const movie = service.getOne(1);
      expect(movie).toBeDefined();
      expect(movie.id).toEqual(1);
    });
    it('should throw 404 error', () => {
      try {
        service.getOne(999);
      } catch (e) {
        expect(e).toBeInstanceOf(NotFoundException);
        expect(e.message).toEqual('Movie with ID 999 not found');
      }
    });
  });

  describe('deleteOne()', () => {
    it('should delete', () => {
      const beforeDelete = service.getAll();
      service.deleteOne(1);
      const afterDelete = service.getAll();

      expect(afterDelete.length).toEqual(beforeDelete.length - 1);
    });

    it('should return true', () => {
      const bool = service.deleteOne(1);
      expect(bool).toEqual(true);
    });

    it('should be not found', () => {
      try {
        service.deleteOne(2);
      } catch (e) {
        expect(e).toBeInstanceOf(NotFoundException);
        expect(e.message).toEqual('Movie with ID 2 not found');
        expect(e.status).toEqual(404);
      }
    });
  });

  describe('create()', () => {
    it('should create a movie', () => {
      const movie = service.getOne(1);
      expect(movie).toBeDefined();
    });

    it('should has property', () => {
      const movie = service.getOne(1);
      expect(movie.title).toBeDefined();
      expect(movie.title).toEqual('Test Movie');
      expect(movie.year).toBeDefined();
      expect(movie.year).toEqual(2000);
      expect(movie.genres).toBeDefined();
      expect(movie.genres).toEqual(['test']);
    });
  });

  describe('patch()', () => {
    it('should be 404', () => {
      try {
        service.patch(999, {});
      } catch (e) {
        expect(e).toBeInstanceOf(NotFoundException);
        expect(e.status).toEqual(404);
        expect(e.message).toEqual('Movie with ID 999 not found');
      }
    });

    it('shoul be update', () => {
      service.patch(1, {
        title: 'movie2',
        year: 2002,
        genres: ['romance'],
      });

      const renewalMovie = service.getOne(1);
      expect(renewalMovie.title).toEqual('movie2');
      expect(renewalMovie.year).toEqual(2002);
      expect(renewalMovie.genres).toEqual(['romance']);
    });
  });
});
