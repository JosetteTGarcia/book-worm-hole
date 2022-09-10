class UserBookSerializer < ActiveModel::Serializer
  belongs_to :book
  has_one :user
  attributes :id, :user_id, :book_id, :user_notes, :date_started, :date_completed, :is_completed, :rating



end
