class CreateUserBooks < ActiveRecord::Migration[6.1]
  def change
    create_table :user_books do |t|
      t.integer :user_id
      t.integer :book_id
      t.text :user_notes
      t.date :date_started
      t.date :date_completed
      t.boolean :is_completed
      t.float :rating
      t.timestamps
    end
  end
end
