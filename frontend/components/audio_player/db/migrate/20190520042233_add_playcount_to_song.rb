class AddPlaycountToSong < ActiveRecord::Migration[5.2]
  def change
    add_column :songs, :play_count, :integer
    change_column_null :songs, :play_count, false
  end
end
