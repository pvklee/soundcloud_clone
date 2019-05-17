class CreateFavorites < ActiveRecord::Migration[5.2]
  def change
    create_table :favorites do |t|
      t.integer :user_id, null: false
      t.integer :song_id, null: false
      t.timestamps
    end
    add_index :favorites, [:song_id, :user_id], unique: true
    add_index :favorites, :user_id
  end
end
