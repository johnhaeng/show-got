class CreateDesigners < ActiveRecord::Migration[5.2]
  def change
    create_table :designers do |t|
      t.integer :user_id
      t.integer :city_id
      t.string :show_date
      t.string :name
      t.string :img
      t.string :description
      t.string :contact_details
      t.string :social_media

      t.timestamps
    end
  end
end
