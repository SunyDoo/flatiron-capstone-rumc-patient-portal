class CreateLocations < ActiveRecord::Migration[7.0]
  def change
    create_table :locations do |t|
      t.string :address
      t.string :phone_number
      t.string :image_url

      t.timestamps
    end
  end
end
