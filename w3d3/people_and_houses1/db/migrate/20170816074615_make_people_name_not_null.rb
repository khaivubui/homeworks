class MakePeopleNameNotNull < ActiveRecord::Migration[5.1]
  def change
    change_column :people, :name, :string, null: false
  end
end
