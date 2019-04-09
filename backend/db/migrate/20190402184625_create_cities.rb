class CreateCities < ActiveRecord::Migration[5.2]
  def change
    create_table :cities do |t|
      t.string :name
      t.string :location
      t.string :img
      t.integer :user_id
      t.integer :show_id

      t.timestamps
    end
  end
end
