class AddColumnToSongs < ActiveRecord::Migration[5.2]
  def change
    add_column :songs, :play_count, :integer
  end
end
