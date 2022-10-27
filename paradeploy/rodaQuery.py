from sqlalchemy import create_engine

myDataBase = 'postgresql://antonioMelo:dante123@localhost:5432'
engine = create_engine(myDataBase)
connection = engine.raw_connection()
cur = connection.cursor() 
fd = open('C:\\github\\Nortcromo_Manuten-o\\paradeploy\\criadorDasTabelas.sql', 'r')
sqlFile = fd.read()
query = sqlFile
cur.execute(query)
connection.commit()