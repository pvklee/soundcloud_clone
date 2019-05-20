class MakePlaycountNullfalse < ActiveRecord::Migration[5.2]
  def change
    change_column_null :songs, :play_count, false
  end
end
