

        function Affiche(selection) {

            switch (selection.id) {
                case 'chkun':
                    if (selection.checked)
                        document.getElementById("un").style.visibility = "visible";
                    else
                        document.getElementById("un").style.visibility = "hidden";
                    break;

                case 'chkdeux':
                    if (selection.checked)
                        document.getElementById("deux").style.visibility = "visible";
                    else
                        document.getElementById("deux").style.visibility = "hidden";
                    break;

                case 'chktrois':
                    if (selection.checked)
                        document.getElementById("trois").style.visibility = "visible";
                    else
                        document.getElementById("trois").style.visibility = "hidden";
                    break;
            }

        }

        function Traitement() {
            var nom = document.getElementById("txtNom").value;
            var prenom = document.getElementById("txtPrenom").value;
            var salaire = document.getElementById("txtSalaire").value;
            var nbEnfant = document.getElementById("nbrEnfant").value;

            var p = new Personne(nom, prenom, salaire, nbEnfant);

            document.getElementById("txtPrimeSalaire").value = p.PrimeSalaire();
            document.getElementById("txtPrimeEnfant").value = p.PrimeEnfant();
            document.getElementById("txtPrimeTotal").value = p.PrimeTotal();
        }

        class Personne {
            constructor(nom, prenom, salaire, nbEnfant) {
                this.Nom = nom;
                this.Prenom = prenom;
                this.Salaire = salaire;
                this.NbEnfant = nbEnfant;
            }

            PrimeSalaire() {
                if (this.Salaire < 3000)
                    return this.Salaire * 0.4;
                else
                    if (this.Salaire < 4000)
                        return this.Salaire * 0.2;
                    else
                        return this.Salaire * 0.1;
            }

            PrimeEnfant() {
                if (this.Salaire < 3000) {
                    if (this.NbEnfant > 2)
                        return this.NbEnfant * 1000;
                    else
                        return this.NbEnfant * 500;
                }
                else
                    if (this.Salaire > 4000) {
                        return this.NbEnfant * 100;
                    }
                    else {
                        if (this.NbEnfant > 3)
                            return this.NbEnfant * 500;
                        else
                            return this.NbEnfant * 300;
                    }
            }

            PrimeTotal() {
                return this.PrimeEnfant() + this.PrimeSalaire();
            }
        }
