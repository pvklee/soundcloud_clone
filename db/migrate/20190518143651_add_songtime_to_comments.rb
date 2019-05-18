class AddSongtimeToComments < ActiveRecord::Migration[5.2]
  def change
    add_column :comments, :song_time, :float, after: :parent_comment_id
  end
end
