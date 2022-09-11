class Api::UserBooksController < ApplicationController
  skip_before_action :authenticate_user


  def index
    userbooks = UserBook.all
    render json: userbooks
  end


  def show
    book = UserBook.find_by(id: params[:id])
      if book
        render json: book
      else 
        render json: {error: "Book not found"}, status: :not_found
      end
  end

  def create
    book = UserBook.create!(user_books_params)
    render json: book, status: :created
  end

  def update
    book = UserBook.find_by(id: params[:id])
    if book
      book.update(user_books_params)
      render json: book
    else
      render json: { error: "Book not found"}, status: :not_found
    end
  end

def destroy
  book = UserBook.find_by(id: params[:id])
  if book 
    book.destroy
    render json: {}
  else 
    render json: { error: "Book not found" }, status: :not_found
  end
end

  private
  
  def user_books_params
    params.permit(:book_id, :user_id, :user_notes, :date_started, :date_completed, :is_completed, :rating)
  end

 
end
