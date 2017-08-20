class BooksController < ApplicationController
  def index
    @books = Book.all
  end

  def new
    # your code here
  end

  def create
    Book.create!(book_params)
    redirect_to :books
  end

  def destroy
    Book.find(params[:id]).destroy
    redirect_to :books
  end

  private
  def book_params
    params.require(:book).permit(:title, :author)
  end
end
