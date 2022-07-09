class CreateTestimonials < ActiveRecord::Migration[7.0]
  def change
    create_table :testimonials do |t|
      t.belongs_to :patient, null: false, foreign_key: true
      t.belongs_to :location, null: false, foreign_key: true
      t.boolean :recommend, default: false
      t.text :feedback

      t.timestamps
    end
  end
end
