class UserSerializer < ActiveModel::Serializer
  has_many :user_books
  attributes :id, :username, :password, :password_confirmation
end
