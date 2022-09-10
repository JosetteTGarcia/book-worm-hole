class BookSerializer < ActiveModel::Serializer
  has_many :user_books
  attributes :id, :title, :author, :img_url, :genre_id, :average_rating
end
