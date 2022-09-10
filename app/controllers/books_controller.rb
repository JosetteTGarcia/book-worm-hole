class BooksController < ApplicationController
  skip_before_action :authenticate_user

  def index
    books = Book.all
    render json: books
  end

  def show
    book = Book.find_by(id: params[:id])
      if book
        render json: book
      else
        render json: {error: "Book not found"}, status: :not_found
      end
  end

  def create 
    book = Book.create(book_params)
    render json: book, status: :created
  end

  def update
    book = Book.find_by(id: params[:id])
    if book
      book.update(book_params)
      render json: book
    else
      render json: { error: "Book not found"}, status: :not_found
    end
  end


  private 

  def book_params
    params.permit(:title, :author, :img_url, :genre_id)
  end
end
