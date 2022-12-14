class User < ApplicationRecord
  has_many :user_books
  has_many :books, through: :books

  has_secure_password
  validates :username, presence: true, uniqueness: true

end
