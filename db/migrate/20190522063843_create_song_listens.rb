class CreateSongListens < ActiveRecord::Migration[5.2]
  def change
    create_table :song_listens do |t|
      t.integer :song_id, null: false
      t.integer :user_id, null: false
      t.timestamps
    end
    add_index :song_listens, :song_id
    add_index :song_listens, :user_id
  end
end
