class AddColumnsToSearches < ActiveRecord::Migration[5.2]
  def change
    add_column :searches, :suggestion_type, :string
    add_column :searches, :suggestion_id, :integer
    add_index :searches, [:suggestion_id, :suggestion_type]
  end
end
