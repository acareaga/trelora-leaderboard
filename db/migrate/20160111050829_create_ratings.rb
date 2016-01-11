class CreateRatings < ActiveRecord::Migration
  def change
    create_table :ratings do |t|

      t.timestamps null: false
    end
  end
end
