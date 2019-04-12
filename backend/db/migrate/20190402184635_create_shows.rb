class CreateShows < ActiveRecord::Migration[5.2]
  def change
    create_table :shows do |t|
      t.string :name
      t.string :season_one
      t.string :season_two
      t.string :show_date_one
      t.string :show_date_two
      t.string :img
      t.integer :user_id
      t.integer :city_id

      t.timestamps
    end
  end
end
