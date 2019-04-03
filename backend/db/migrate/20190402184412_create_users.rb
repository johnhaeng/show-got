class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.string :location
      t.date :birthday
      t.string :img
      t.string :username
      t.string :password_digest

      t.timestamps
    end
  end
end
