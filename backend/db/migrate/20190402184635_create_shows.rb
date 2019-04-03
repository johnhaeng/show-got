class CreateShows < ActiveRecord::Migration[5.2]
  def change
    create_table :shows do |t|
      t.string :name
      t.date :date
      t.text :description
      t.string :image
      t.integer :user_id
      t.integer :city_id

      t.timestamps
    end
  end
end
