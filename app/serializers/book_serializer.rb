class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :author, :img_url, :genre_id, :average_rating
  has_many :user_books
  has_many :users, through: :user_books
end
