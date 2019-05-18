class ChangeCommentsColumnposition < ActiveRecord::Migration[5.2]
  def change
    change_column :comments, :song_time, :float, after: :parent_comment_id
  end
end
