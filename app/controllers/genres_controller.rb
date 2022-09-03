class GenresController < ApplicationController

  def index
    genres = Genre.all
    render json: genres
  end

  # def show
  #   genre = Genre.find_by(name: params[:name])
  #   if genre
  #     render json:genre
  #   else
  #     render json: {error: "Genre not found, would you like to add this genre to our list?"}, status: :not_found
  #   end
  # end

  def create
    genre = Genre.create(genre_params)
    render json: genre, status: :created
  end



private
  
  def genre_params
    params.permit(:name)
  end
end
