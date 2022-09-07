class UserBooksController < ApplicationController

  def index
    userbooks = @currentuser.user_books.all
    render json: userbooks
  end

  def show
    book = @currentuser.user_books.find_by(id: params[:id])
      if book
        render json: book
      else 
        render json: {error: "Book not found"}, status: :not_found
      end
  end

  def create
    book = @current_user.user_books.create!(user_books_params)
    render json: book, status: :created
  end

  def update
    book = @current_user.user_books.find_by(id: params[:id])
    if book
      book.update(user_books_params)
      render json: book
    else
      render json: { error: "Book not found"}, status: :not_found
    end
  end

def destroy
  book = @current_user.user_books.find_by(id: params[:id])
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
