class CreateDoctors < ActiveRecord::Migration[7.0]
  def change
    create_table :doctors do |t|
      t.string :name
      t.string :specialty
      t.belongs_to :location, null: false, foreign_key: true
      t.text :network, array: true, default: []
      t.string :image
      t.string :phone_number

      t.timestamps
    end
  end
end
