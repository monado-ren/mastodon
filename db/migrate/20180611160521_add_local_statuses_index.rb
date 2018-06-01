class AddLocalStatusesIndex < ActiveRecord::Migration[5.2]
  disable_ddl_transaction!

  def change
    add_index :statuses, :created_at, where: '(local = true OR uri is null) and visibility = 0', algorithm: :concurrently
  end
end
