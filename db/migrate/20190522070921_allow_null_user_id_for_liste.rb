class AllowNullUserIdForListe < ActiveRecord::Migration[5.2]
  def change
    change_column_null :song_listens, :user_id, true
  end
end
