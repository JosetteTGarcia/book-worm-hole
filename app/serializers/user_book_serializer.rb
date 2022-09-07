class UserBookSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :book_id, :user_notes, :date_started, :date_completed, :is_completed, :rating
  belongs_to :book
  has_one :user
end
