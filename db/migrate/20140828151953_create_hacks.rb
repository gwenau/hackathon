class CreateHacks < ActiveRecord::Migration
  def change
    create_table :hacks do |t|
      t.string :entry

      t.timestamps
    end
  end
end
