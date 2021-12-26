
    let arr = [1,2,3]
        let arr2 = new Array(1,2,3,4)
        console.log(arr2)
        function myarray() {
            this.length = arguments.length;

            Object.defineProperty(this, "length", {
                writable: true,
                enumerable: false,
            });
            for (var i = 0; i < this.length; i++) {
                this[i] = arguments[i]
                // console.log(arguments[i])

            }
        }

        myarray.prototype.जोडा = function (el) {
            this[this.length] = el;
            this.length++;
        }


        myarray.prototype.काढा = function () {

            let index = this.length - 1
            delete this[index]
            this.length--;

        }

        myarray.prototype.उलटकरा
            = function () {
                var reverse = []
                for (var i = this.length - 1; i >= 0; i--) {
                    reverse.push(this[i])
                } console.log(reverse)
            }

        myarray.prototype.पहिलाघटक = function () {
            console.log(this[0])
        }


        let masai = new myarray(1,2,3,4)
        console.log("masai:", Object.values(masai))
        masai.जोडा(6)
        masai.जोडा(5)
        masai.काढा()
        masai.उलटकरा()
        masai.पहिलाघटक()
        console.log("masai", Object.values(masai))
    

