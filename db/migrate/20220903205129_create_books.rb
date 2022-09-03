class CreateBooks < ActiveRecord::Migration[6.1]
  def change
    create_table :books do |t|
      t.string :title
      t.string :author
      t.string :img_url
      t.float :average_rating
      t.integer :genre_id
      t.timestamps
    end
  end
end
