class CreateRestaurants < ActiveRecord::Migration[5.2]
  def change
    create_table :restaurants do |t|
      t.string :name
      t.string :img
      t.string :address
      t.integer :rating
      t.integer :user_id
      t.integer :city_id
      t.timestamps
    end
  end
end
