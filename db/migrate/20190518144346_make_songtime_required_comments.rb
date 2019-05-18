class MakeSongtimeRequiredComments < ActiveRecord::Migration[5.2]
  def change
    change_column :comments, :song_time, :float, null: false
  end
end
