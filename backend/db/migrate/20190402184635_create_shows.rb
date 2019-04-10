class CreateShows < ActiveRecord::Migration[5.2]
  def change
    create_table :shows do |t|
      t.string :name
      t.string :season
      t.string :show_date
      t.string :img
      t.integer :user_id
      t.integer :city_id

      t.timestamps
    end
  end
end
