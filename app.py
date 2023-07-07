from flask import Flask ,jsonify ,request
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow


app = Flask(__name__)
CORS(app)

#app.config['SQLALCHEMY_DATABASE_URI']='mysql+pymysql://root:root@127.0.0.1:3307/proyecto'
app.config['SQLALCHEMY_DATABASE_URI']='mysql+pymysql://germanrvera:root1234@germanrvera.mysql.pythonanywhere-services.com/germanrvera$default'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS']=False

db = SQLAlchemy(app)
ma = Marshmallow(app)

class Reserva(db.Model):

    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(100), nullable=False)
    telefono = db.Column(db.String(15), nullable=False)
    fecha = db.Column(db.Date, nullable=False)
    hora = db.Column(db.Time, nullable=False)
    numPer = db.Column(db.Integer, nullable=False)
    coment = db.Column(db.String(100))

    def __init__(self,nombre, email,telefono, fecha, hora, numPer,coment):

        self.nombre = nombre
        self.email = email
        self.telefono = telefono
        self.fecha = fecha
        self.hora = hora
        self.numPer = numPer
        self.coment = coment



with app.app_context():
    db.create_all()



class ReservaSchema(ma.Schema):
    class Meta:
        fields = ("id", "nombre", "email", "telefono", "fecha","hora","numPer","coment")

reserva_schema = ReservaSchema()
reservas_schema = ReservaSchema(many=True)

@app.route("/reservas", methods=['GET'])
def get_reservas():

    all_reservas = Reserva.query.all()

    return reservas_schema.jsonify(all_reservas)

@app.route("/reservas", methods=['POST'])
def create_reserva():

    nombre = request.json['nombre']
    email =request.json['email']
    telefono =request.json['telefono']
    fecha = request.json['fecha']
    hora = request.json['hora']
    numPer =request.json['numPer']
    coment =request.json['coment']


    new_reserva = Reserva(nombre, email,telefono, fecha, hora, numPer,coment)
    db.session.add(new_reserva)
    db.session.commit()

    return reserva_schema.jsonify(new_reserva)

@app.route('/reservas/<id>',methods=['GET'])
def get_reserva(id):

    reserva=Reserva.query.get(id)


    return reserva_schema.jsonify(reserva)

@app.route('/reservas/<id>',methods=['DELETE'])
def delete_reserva(id):

    reserva=Reserva.query.get(id)


    db.session.delete(reserva)
    db.session.commit()

    return reserva_schema.jsonify(reserva)


@app.route('/reservas/<id>' ,methods=['PUT'])
def update_reserva(id):

    reserva=Reserva.query.get(id)


    nombre = request.json['nombre']
    email =request.json['email']
    telefono =request.json['telefono']
    fecha = request.json['fecha']
    hora = request.json['hora']
    numPer =request.json['numPer']
    coment =request.json['coment']


    reserva.nombre = nombre
    reserva.email = email
    reserva.telefono = telefono
    reserva.fecha = fecha
    reserva.hora = hora
    reserva.numPer = numPer
    reserva.coment = coment

    db.session.commit()

    return reserva_schema.jsonify(reserva)



if __name__== "__main__":
    app.run(debug=True)