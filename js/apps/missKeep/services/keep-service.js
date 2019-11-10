import utilService from '../../../services/util-service.js'
const STORAGE_KEY = 'KeepApp'



export default {
    getNotes,
    emptyNote,
    addNote,
    emptyTodo
}

var gNotes = [{
        id: utilService.makeId(),
        date: utilService.getCurrentTime(),
        type: 'textComp',
        text: {
            headline: 'buy a new car ',
            body: 'asdasd',
        },
        color: '#ff5555',
        order: 0
    }, {
        id: utilService.makeId(),
        date: utilService.getCurrentTime(),
        type: 'textComp',
        text: {
            headline: 'buy a new car ',
            body: 'asdasd',
        },
        color: '#ff5587',
        order: 0
    }, {
        id: utilService.makeId(),
        date: utilService.getCurrentTime(),
        type: 'textComp',
        text: {
            headline: 'buy a new car ',
            body: 'asdasd',
        },
        color: '#ff5531',
        order: 0
    },
    {
        id: utilService.makeId(),
        date: utilService.getCurrentTime(),
        type: 'todo',
        data: {
            headline: 'fsefef',
            todos: [{
                    num: 1,
                    done: true,
                    text: 'ewfewfwefe'
                },
                {
                    num: 1,
                    done: false,
                    text: 'ewfewfwefe'
                },
                {
                    num: 1,
                    done: false,
                    text: 'ewfewfwefe'
                },
                {
                    num: 1,
                    done: true,
                    text: 'ewfewfwefe'
                },
                {
                    num: 1,
                    done: false,
                    text: 'ewfewfwefe'
                },
            ]
        },
        color: '#ff9555',
        order: false,
        numOfTodos: 1

    },

    {
        "id": "cjr",
        "date": {
            "year": 2019,
            "month": 10,
            "dateDay": 10,
            "hour": 19,
            "min": 49,
            "sec": 18,
            "weekDay": "Sunday"
        },
        "type": "audioCmp",
        "text": {
            "headline": "",
            "body": "audioCmp"
        },
        "color": "#ffffff",
        "order": false,
        "url": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3"
    }, {
        "id": "Eln",
        "date": {
            "year": 2019,
            "month": 10,
            "dateDay": 10,
            "hour": 19,
            "min": 48,
            "sec": 40,
            "weekDay": "Sunday"
        },
        "type": "audioCmp",
        "text": {
            "headline": "",
            "body": "audioCmp"
        },
        "color": "#ffffff",
        "order": false,
        "url": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
    }, {
        "id": "s31",
        "date": {
            "year": 2019,
            "month": 10,
            "dateDay": 10,
            "hour": 19,
            "min": 48,
            "sec": 37,
            "weekDay": "Sunday"
        },
        "type": "textComp",
        "text": {
            "headline": "ewfewf",
            "body": "wefewfewf"
        },
        "color": null,
        "order": false
    }, {
        "id": "Hat",
        "date": {
            "year": 2019,
            "month": 10,
            "dateDay": 10,
            "hour": 19,
            "min": 40,
            "sec": 10,
            "weekDay": "Sunday"
        },
        "type": "videoCmp",
        "text": {
            "headline": "",
            "body": "videoCmp"
        },
        "color": "#ffffff",
        "order": false,
        "url": "https://www.youtube.com/watch?v=Ov15GetL9eo"
    }, {
        "id": "Hat",
        "date": {
            "year": 2019,
            "month": 10,
            "dateDay": 10,
            "hour": 19,
            "min": 40,
            "sec": 10,
            "weekDay": "Sunday"
        },
        "type": "videoCmp",
        "text": {
            "headline": "",
            "body": "videoCmp"
        },
        "color": "#00ffff",
        "order": true,
        "url": "https://www.youtube.com/watch?v=Ov15GetL9eo"
    }, {
        "id": "b9B",
        "date": {
            "year": 2019,
            "month": 10,
            "dateDay": 10,
            "hour": 19,
            "min": 39,
            "sec": 46,
            "weekDay": "Sunday"
        },
        "type": "videoCmp",
        "text": {
            "headline": "",
            "body": "videoCmp"
        },
        "color": "#ff8040",
        "order": false,
        "url": "https://www.youtube.com/watch?v=BIzj50A0tZI&t=2538s"
    }, {
        "id": "IIB",
        "date": {
            "year": 2019,
            "month": 10,
            "dateDay": 10,
            "hour": 19,
            "min": 39,
            "sec": 28,
            "weekDay": "Sunday"
        },
        "type": "imageCmp",
        "text": {
            "headline": "",
            "body": "imageCmp"
        },
        "color": "#ff0000",
        "order": false,
        "url": "https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    }, {
        "id": "Lxs",
        "date": {
            "year": 2019,
            "month": 10,
            "dateDay": 10,
            "hour": 19,
            "min": 39,
            "sec": 14,
            "weekDay": "Sunday"
        },
        "type": "imageCmp",
        "text": {
            "headline": "",
            "body": "imageCmp"
        },
        "color": "#808000",
        "order": false,
        "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdWH2lHsSm96ojSd1hFwD3rEotJaTuw9rKzgR-gQlkVBc6dr9Srw&s"
    }, {
        "id": "YYy",
        "date": {
            "year": 2019,
            "month": 10,
            "dateDay": 10,
            "hour": 19,
            "min": 38,
            "sec": 38,
            "weekDay": "Sunday"
        },
        "type": "imageCmp",
        "text": {
            "headline": "",
            "body": "imageCmp"
        },
        "color": "#ffff80",
        "order": false,
        "url": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUSEhIVFRUWFRUVFRUVFRUVFxcWFhUWFhUVFRYYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGy0dHR0tLS0tLS0rLS0tLSstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rLS0tLf/AABEIAMIBAwMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAACAwABBAUGB//EAD4QAAEDAgQDBgQEBAUEAwAAAAEAAhEDIQQSMUEFUWETInGBkaEyscHwFELR4QYVI1IzYoKy8VNykrM0Q6L/xAAZAQEBAQEBAQAAAAAAAAAAAAAAAQIDBAX/xAAhEQEAAgICAgMBAQAAAAAAAAAAARECEgMTFEEhMVEEYf/aAAwDAQACEQMRAD8AyBqvKihG0Lal5VRan5VfZoMuRVkWk00ORBnyqQtORCaSDPCkJxpoCxLKKLUDmpyoq2lM6IInMQwraUkKEKSrS0pvw/wjwTENAd0InKWzQMyFyppRQhQYVlqINRQgSVUJjmoSECyhKNyW5ALkpxRuSXIBc5VKhUhUSVAplRNCCQojhRUdXIqyopVhYdVAIwqhSEDGhR1NU0o2lLKB2arItLVbmIMZppbqa2OYgLFJWGF1NLcxbnsSnU1FYi1A5q2GmgLEsplyqQn5EJaraU3YYd0eClUJmGHcHgpUFlNk1ZJRU1YpyU8UgFbSYLCkhGWJTqSrFIShIVhqIBELLUtwTnpLmotEPSXJ7qaW5iFFKwiyIg1UoCsBFCOkwlS1ouFa1iiolrTQ2DoVRBSQJRCVjZ11NzlMY6UlpTGjoQlpqZCgVsHNNFHkllKa5GHITSKFzSltVZzSo5oWbMUbaqbGg8iFzETXqw7mps1GEsz6aU6kukGBLfTWdmtJc8sS3NW17Fne1XZNW3Ds7jfBU5qfhm/02+CW8LFrqzhl0ahUAWolzyxCULkRUhXZjUoqI3BKcU2XQL0h7k1xWaq9WycQl6gKS6oEdOorbFGISE3sidE2hhdymxRNGne6306I2T6VBq1ClGgKmxTMMOotBUSynAp4joiFad1yxVKJtVZenWXVbVRNrwuc2sjFUpa6TLpsrytFOquQx6YK5U2OuXep4gc0ecLhMqrTTrKTkRhLoOAS3UwpRvqidSjmuc8kO2PFKhRVFhTGA80xrVic3aOOSGtKPKtjKYVmiFjd10imF1NZ6lBdF9FZnthajNzy42nDU+43wSatNdHCt7jfBR9Ba3cJxcV9MqgulVo9FirUiFd167LVpDiUTCeSuzE8dCcxJcxaQ/ok1qgCuzGrFXMLBVqrTWdJQDAucukTEfbnlEsOZMa1dOhwNxWxnBXf2lJ5IYjjlzMK0g3K6dN8rW3gnM+gWmlgA3qsTyQ1oGhR6JxoprDAupKm6alCgPsKJs9VE3TV484MJTsEV6v+TN2ePIg+1kDuDv6eh+i8sf0Q+x1Yy8mcMRsp2Z5r1Z4Vzskv4KdiCrH9MJ0Q8zlcibUI1XbfwwjVnogHDWneFvvxI4Z9OfRfPJaBVjZPPDY+wq/BP/LdYnkiXfHjLbjVroY0j8wPispwbz8VMeX7If5fGzmrM54tRxTPp2aOJnUegW+mQdAvO0aTho4+krvcIc4nK6mXdRb6rllLc46xdGOyjUQqluzl1n4BpEg+Rj56FczFcMY7cA+P6LnuxjlhkFzlme0HVJrYV9PmR5puGqgmNTyV3mHXrxmHUwtKGCOSbkPJbMDh5AlpC1fhoPRa7Hgz1iXGLeYQVMKDuu1VohZX4YJ2JEw4dbALO/AkL0HZAbhUKQK1HKsw826gUg8Nc5euGGHIKnUgNIWu5y+HncLwMC7ltZg2t2W91KfzHwVik3mnbbnOLO2Ai7RP7AKxhgp2MTjDK6EHZE7LflAV5wnazqwjCFGMKE99do1I9Uv8QDpdXsTVXYhRV2qivYmslZKZ0qesFFkb/wBUeQH6ryvYf5h6KxTP94915Ov/AF9nWXrA21qwPiJ+qBwdzpn1C8w0uH5h9+KaKx5j2Unjn9ajB6FpfuGn/V+qW6lzZ6FpXE7c81YxbhuprLcYS7BoMOoLfL90LMOwGc/yXObj+Y9ChfxEb5k1yXWf13Bl5+37KdkOh8guAOJ8g0+Igqn49x0JHgZTrySMJ9PQtps3EeScyBcOheV/GVeZ9k1nEnj4h9+SdeSzxTL1QqDmPQD5KxA3B8Wj5rzLuKNaJe4D5o/5q2JBnwWdc3OeGpq3oXOabO/2iPZMpCmL5W+gXlzxcc0J4t1V0zZnjj9e4GL6oXYkHUrxP88AtKF/8QtAkuAHMmFevkcJ4cY9vbnEjogfiRzC8WeOdVxeOfxe6k5rQMwIkmcsTIG1+fkFrHg5MpqGcscMIuZfRatZu8LKarJt+i8RgP4xa9gc5zWkyMpcJsY91rqce8fVa6OSJqWscsZj4l7EYs8vdIr41o1LR5heIq8Wnn6rK7GhdMf58vbGU4Q9lV4qzZyyu40BvZeUOMQHFrrHA5ZZw9e3jw2CI/xAf7SvGHF9Ut2KPNa8eHOc4ewfxx3IDxd+iTU4rzcD0Dj8yvJHEKu3WvHhjeHqhxqNghdx7xXlDWQmqtePinY9Uf4iPL3UXk+0VK9GKdku72x5qu1PNeWbxUnY6fdvJNp410SeXP6Lv0QvlZPSdr1U7XqvNDHHnPgVzMVxCp2hhxEaD9eavjwnlZPaYjE5WOfrlBMTrHVDg8eHtBDgCRJbmkheadjS5sRqCqp1i24G3huFfHxPKzer/FH+5H+LP9y80zECbm3S/jAkSgOKjX2U8fFfLz/XexXFgxzWueZdpAkaxcp7sSf7+my8jiKmZwde0a9CtP4wkSL+0K9GJ5fJ+vSOrn/qHyJ+iVUrWHfJkgXcdzErz5xJneOkW81DiXSB5iel06cSf6c59vQ9z+5Uyo24ki/quBUxro0B8OvgsmHrvLpLjE/3Oi/Q2V6oZ75esqVGhpIM2JA8rLE/ihFNr8oJzkFskWgmx2Oi5bsSY1HLX6SsxqONtuXidlY4sSebJpHG81Qhzcm/xTytoFm41jA5jQD+YH2K5WNJFR33sFkfiOanXjE3DE8uUxUuhwzFZKrSTbvSfIp3GsWHvbB2A9z+q5OaQDaZPyRhsAEgjkecRMyeo9rLWsXbnvOuomTr1C9Q7iTea8sK0WvHOyhr2Iy3tBkzY36dPJMsYkxznH6eo/mLeaA8RbzXmjV3QGtqp1wvZL0DuNsBi56hTDcXDpkER5rzZfuLdEban2ArpCby9N/MG81Dj28151njBPl6qB8/VNITeXePE2zEqHiTOa89N580VjJ+n1TSDaXeHERfVUeIDquLTkiSQIi2hM2tzQGraev7prCbS7pxwUXBDid1FdINpdSlUEQRtyzHqR0ulMcTJAm28C/WViEm7nT4lx8kLqc7+Y091odjEUzNqTmwNx7+4CQ2iZlwI8YOnnouY8E6ku8T1R06QjlfkPkNUsdRlMjlfWCPcJOKrNaItM7QVjFvmDGqJsncXdefmQlh9PHjcH9EeKxbXNAAuDqBFhZYm0xuQBOwv4jZU8gaa/cINNCrG4+f/Cf/ADDLYDb09fBc4uun08M59wB0kxMbQlh4xBcdT7j5eK2OxbTDbi2pbra0ep9ViqYBzLhwiP8AM0g+EeKqiwud/jETaXA77C9/3QbKbHEnK45eUH05Sk1g7TKeW59FpwzS1s3mRO8e313WbERqM5OpAaSRyI5T6ItnYOi6fhMczaOvOEGIp1J19EGFrFrYc0idjMxGylfFMDQfzCJJ8dG8lFty8TmzG833lZinYyuHOcQZH7JDT4KM214V0NkZS4loaDEtOYHMPSP9SmIGXKZzZhM/OfOfRZKDoIOhBBB6g2Wmu05QSd7SfGYHmntfRDzoeqe18TrHJZ/HomBw0VZU0goyQLe++qVkgE36JZQaaTp1COqSHT+2yyNc5W2o7RA91S6sO5R+yymoVGvQaXKNdz9Uum+Zt46+SjY5SfZATk59EBgcHS46tvb9fJI7PW3uraYH7qUKAPP5/orQFo5KKh9YFpLTqEygZA+9yi0zNqFpuQLB3O4jQKUwAIFtNbpAqPL/AJCuqXQCLkO123N0QbMxewtHUTJT8EbkxcHcT7FWVc+tnESwjkY+qKhSe7n6HxWz8XlJbki4nY9CbSdZvzR1MSIzQBBF7kz5kqDG/DEWcQOkz/wgdRuAL6aedyT92TsRUzkBpEk3dBAEaXv9wmNwxYNS462HTYzKqH8Pwj2mYI1kF4AidZHQey08SrUwPyuPW8fKVirU3QPizESLgjw19kmjg8xPaPy2mAJKB44laJb6ARy2R/i2lpBDT1gE+E67LPQwFF29Qxvlj2KTWw7WuhjXG9u8CSQY+EaBPlR1qhaSwAOAAM8huEVLEZdNx+bwg+VymUcCWO77gHGD8JMCdSHi/PTZbuJ1cjWOa9z8xcBnYxug2AGigzYfHNE5hmnnMDQ2AI38dfV+K4k0kiS4SCALgHmZ8TZZXYSo4Z3NABgzIFj8Mbc7JNfAVmtBJ7tu9madeUORWXGVAXEz+9hzW3hvBXVmF7XsBguylzWktBgwTN+kbrm1KMPyn18l0cHi20mEEU3GzgXMLy47MvIDdTpqAsZ3XwkTU/LFSYW30I5xNxsIne/iqeDbkOXkroQ4uBkWcbCb2hoAiBPoirYgxGxAnSBEaWsdlVtndUJEWtohcmgAtne6diMDUYxr3tGVzGvEEHuuJaHHLpcEeIg3sqyys06C+vyV2jX1ROfAsLR6oaWWbtkeY9CFRPP3RNgCdvuENQD8rvIz84VipsSR0I+iC231+nrIUdG49LK3VRs6fIjyhE0kg6dCfogXTjwRPF5jwRZCLQCgc9wMnwlBQZcySPKVRJGh841Vmoddzvt9/qjeRAM7T5zHnp7oFmoVFbq3RRBpqlpe7K4kbF1jAIgfRMDuuzdfAIqPD5bJe1pB0OXMBtPeR4fBGp/hy7bS3dEc5GiREkkdsQYB1O5gep0W6k8NvYmAZkQTIvIsVK3D6bbF7p5DLfwAn581lp0y11wHkjuiJgDx0V+hvrljyXubmcTc5iBZoiw8lmoYotqgNJAcRIEbwLWso99gHDLrlm2sAk2k2WWqcrhz10iQDMzKSNXE8STUe6AJgzFzFtfJFgiC10AA5HOJHMe2ixVqsiTqTfl5JvD60E6nukQNbm8e6WO/w3DhzHZybBpY0kZXEkB1nG9iNAlVsO5zXwAYIdZsANGYEmPTZc2riy49/QAREACLAdNh6KGuXAtl3eEWM5r6TyWZuvhq4TsSRplvZ0OjSSL6m43R0uz5O0tJB030Gq6OBoU6tPK+vlcA5+XIXOiwnUQSdOYgrnYrDlhtsLjXeAZ6qiqkTLYGVs6bgl0/JF+KdVc3ORaYgDkgpYZh7suDgHF5jMDsIvZtiJ1kaHYadENcBSe5zTAJc0WBtYCZ8eSfKNtAksfTAk5wQByyH9Vmqg5RSqd3ujyjSfPMqq1i0ZSSAe8SBc7DLzsDbrsgDC5wNSwIuQdTeDfaICUtuYXAvJJtzueiYHs0gu5TISMRAqOAiJsRy29kJKiNuGfkJcA0ktc2TNg4QSBzgkeaR2OazTtPmASfYH2QOqQIVMJFwdjfxBB+aUi3sqMDS5rmhwlpILQ4TBLSfiEjZOxVVxa1rjIa2G9ADPkLlBUquc1rXvc4MEMBJdkbMkMBIAE6hKJGaJjrE+yCy0NiLkppfNso5Tv7JVU3b46+iL7mCNNVQkqyL2n5QmGYMbnrItrPmoKf3soIMlpJ2m0wJ2ulSZjYFWWmYR5CItfe/wCqo0PcN+fOEqrv+/TdCH81Kjvv0QHigwOIaSRsYi0bzv5JZFgAdB1G5P1QZUbbqUF9l1Ci0CmNxPqoqOo2m6uHGQRIEhs6XgEDlCGiH05bTzESbgaWgzOm+q2swjso1db+/QaxpACyhr6jsjSfANJ9Ykm/yVFOf3AWwdjGu++mvzQcHirULXEgAZu6YMCBre990+pwzL8NQOyzaD8xt1ScDRpOfAOWxk54afMGY8lAzGYlha1xH53NAdfugT3oOt/klHFAiOzZlNi5lKmXR0fcg9ZC1V6tGmQGuBGxbmaL6kB0ui2p8kniOMpmARmcLABxgc50kyrIz12NdZjIJ0bmBdN7kN+Fvj1R4Dhr9IEnlc+CTgqmVsyGkkkyNW/luRon1alTKDmJDrgAZtNy0RF41UgbsFhKTW/1MxdJs0wMouPOy5Jqi5yw2bCJ3sDF1qp15AmZMNkiAL7QgY/+o0gBpF5AmQ3eIJLpI2sqH4N4DiHOI7sgQ+bucLtAJFhOm4SsbXzvbEx/qBOkmDouh/NDmzF1Q2iSXi3KdZ15Lj9tNQucYP5TrB03+7JI1VM7S6waG3JBMOFy4BxN/qqw/FiCTSaWAwHaGQNJt1VPcSxxzZxBkReYsNUrDRkGgm3nMKK1niLnEGC5wm4Fy0xIsJ2F1m7Q1BFWxGsghzpBy23iB6KqL20z2mcZtADeLFsemivE1z2gL6gOUzLSCRPzuVUczEiHaR0A5JQK1YyuC9xBkTawCyPMlZB1VJshqFWdEF0nQUT6U3Hny1SZTw8AQYvy6IElxtOyJtTaOXsjIzDTwQEEWIHQ/ugZIKZSjaZF+kj5pDXIzVggbdFRorV80fD0gH0QvpPicp11iw5X9fRVSLQQ5zQ4bAd28GCTfeD5L1dL+KqMFrsEIPKqTzjVvX262TKfPp4+pVcfiJkcyfPwSi9buKuY6q59JhawwQxzsxFhIJAE3nyWUvbyuiipxEx5R9wjabG4ncXnySQ5vX5fVR7LTNvBAU9VFbcMI+I/+M/VWg9A3EZmjNYC4zSdDY7fcLUMM/IHNqBg0Ds0HoMrNl55hqVzJNtCSdTz0ut9LhmVphxz3IJMAeEH3SwxnD8R8boMWHaXB5EDlry3UqDEPd3i2TYuIDvEC0AdABsj4f2hbnOeZiC8ABsfEQ7XU26Iq/EGMIyw8iJt3R4c/RUBXwLKDQQyXG4zaTzy7LJg6BdUGZh7xJc4h2XWSLc72ELTVxrS/wDptz1HQM7myBbRjNh1K6zqQbTa1xJdq4uDmbD4G+QCfY5PFGNYWmHFo3Md6PyCWyI7vPVcypiw493O0HUF4dpe0NEeC6X8SPu2m2O6zbdzjy8tFloYRnZNgA1CSXl8QIFmtsdZvvYKSrE3EBtmi/Pcc4+91eDxHZ5nWLjbQOgcoPgumcHTlkOAaXDOJazMAADrHXSdVr41iKRoOy0mtcS0AgtcYzQSHDwViEYaeMfVcxgESYvoSQbmPom8R4D2ZLqrwBIMgGD0G/sNVzcAaYJc8PJmzWW8y6D10R1Ggnu9qQ74gWna4GYnbnZQHh6oZYB2Wxc0GJBG4JGxW/8AGUhpREWN3nbzvPkuQXtdUJI7uRoaOgAA+XujzsF4Pp+pVgMbgs3fztAIvLhIOs3gNGmvNb8HSwbQ3tA8lzTcFw1nUDQEFunVY2129m8QZIEO1Ayza02NvRaeFtBoy4RDmgHpBJ+iQORxOmxtVwp/DMNF7ac1HUmSIBi2b9kWPZ33A2cC2RrcAB0dCZI8lTw6bZiP+0hQZqzb79PD11VJlZtt7dEkSLqA8ka+iOsQYjkEq5vz+7KZtkUTTFwb7W+qEknUqOVOjZSykjkrcR+6PDAEwTG07X59EL2Xt6fpKoNjvotOZYWFH2hVhDMS6CCLJLnSmTKU5hQW0HyWmQCL6EEzcGDN1nY6B5otNd+o0HTUKDQ2oAIDmx4O/VRZyG/ZUQdvDPIBgkX+cyuhRP8AVPRpjpbZRRageffVdncMx+LmeiGtv4lRRZV0/wCGmjM+39nuHz8gu/X+EncAweXgootx9I8rir4gzeSyf/Bq1MpNDzDQO446DXmrUWYGzF//AByf88f/ALcsPFWjsWW/K3/e5RRUbODtHZNtz/3LRWPfYNiDI2Nt1FFv0z7c7E029m8wJDqYBgSBOgXNxQv5hRRZyWG3Y/8AafkmcGcexff/AOyn/wCt6iizj9t8n25vF/8AHd5fILoHRRRWPuWJ+nMrG7vA/ILEVFFJUTVN1FFBCqUURW5jRGgSMWLhRRWUgFTbwCAqKKAmboxuooqBein5FRRBnlRRRQf/2Q=="
    }, {
        "id": "K99",
        "date": {
            "year": 2019,
            "month": 10,
            "dateDay": 10,
            "hour": 19,
            "min": 9,
            "sec": 59,
            "weekDay": "Sunday"
        },
        "type": "textComp",
        "text": {
            "headline": "aaa",
            "body": "aaaaa"
        },
        "color": "#ff80ff",
        "order": false
    }, {
        "id": "nLE",
        "date": {
            "year": 2019,
            "month": 10,
            "dateDay": 10,
            "hour": 19,
            "min": 9,
            "sec": 16,
            "weekDay": "Sunday"
        },
        "type": "todo",
        "data": {
            "headline": "shopping",
            "todos": [{
                "num": 1,
                "done": false,
                "text": "a"
            }, {
                "num": null,
                "done": true,
                "text": "b"
            }, {
                "num": null,
                "done": true,
                "text": "c"
            }, {
                "num": null,
                "done": true,
                "text": "d"
            }, {
                "num": null,
                "done": false,
                "text": ""
            }]
        },
        "color": "#ff80ff",
        "order": true,
        "numOfTodos": 1
    }, {
        "id": "nJr",
        "date": {
            "year": 2019,
            "month": 10,
            "dateDay": 10,
            "hour": 19,
            "min": 8,
            "sec": 56,
            "weekDay": "Sunday"
        },
        "type": "videoCmp",
        "text": {
            "headline": "",
            "body": "videoCmp"
        },
        "color": "#ff0080",
        "order": false,
        "url": "https://www.youtube.com/watch?v=HbNX6Lh0xuw"
    }, {
        "id": "F0O",
        "date": {
            "year": 2019,
            "month": 10,
            "dateDay": 10,
            "hour": 19,
            "min": 8,
            "sec": 22,
            "weekDay": "Sunday"
        },
        "type": "videoCmp",
        "text": {
            "headline": "",
            "body": "videoCmp"
        },
        "color": "#ffffff",
        "order": false,
        "url": "https://www.youtube.com/watch?v=x-U9ZCRVT7E"
    }, {
        "id": "KpP",
        "date": {
            "year": 2019,
            "month": 10,
            "dateDay": 10,
            "hour": 19,
            "min": 8,
            "sec": 12,
            "weekDay": "Sunday"
        },
        "type": "imageCmp",
        "text": {
            "headline": "",
            "body": "imageCmp"
        },
        "color": "#ffffff",
        "order": true,
        "url": "data:image/jpeg;base64,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"
    }, {
        "id": "Bdf",
        "date": {
            "year": 2019,
            "month": 10,
            "dateDay": 10,
            "hour": 19,
            "min": 7,
            "sec": 59,
            "weekDay": "Sunday"
        },
        "type": "imageCmp",
        "text": {
            "headline": "",
            "body": "imageCmp"
        },
        "color": "#ffffff",
        "order": false,
        "url": "data:image/jpeg;base64,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"
    }, {
        "id": "HP4",
        "date": {
            "year": 2019,
            "month": 10,
            "dateDay": 10,
            "hour": 19,
            "min": 7,
            "sec": 34,
            "weekDay": "Sunday"
        },
        "type": "imageCmp",
        "text": {
            "headline": "",
            "body": "imageCmp"
        },
        "color": null,
        "order": false,
        "url": "data:image/jpeg;base64,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"
    }, {
        "id": "5bJ",
        "date": {
            "year": 2019,
            "month": 10,
            "dateDay": 10,
            "hour": 19,
            "min": 7,
            "sec": 21,
            "weekDay": "Sunday"
        },
        "type": "textComp",
        "text": {
            "headline": "buy a new car ",
            "body": "asdasd"
        },
        "color": null,
        "order": false
    }, {
        "id": "OK2",
        "date": {
            "year": 2019,
            "month": 10,
            "dateDay": 10,
            "hour": 18,
            "min": 43,
            "sec": 24,
            "weekDay": "Sunday"
        },
        "type": "textComp",
        "text": {
            "headline": "buy a new car ",
            "body": "asdasd"
        },
        "color": "#ff5555",
        "order": 0
    }, {
        "id": "Pui",
        "date": {
            "year": 2019,
            "month": 10,
            "dateDay": 10,
            "hour": 18,
            "min": 43,
            "sec": 24,
            "weekDay": "Sunday"
        },
        "type": "textComp",
        "text": {
            "headline": "buy a new car ",
            "body": "asdasd"
        },
        "color": "#ff5587",
        "order": 0
    }, {
        "id": "4sT",
        "date": {
            "year": 2019,
            "month": 10,
            "dateDay": 10,
            "hour": 18,
            "min": 43,
            "sec": 24,
            "weekDay": "Sunday"
        },
        "type": "textComp",
        "text": {
            "headline": "buy a new car ",
            "body": "asdasd"
        },
        "color": "#ff5531",
        "order": 0
    }, {
        "id": "EIF",
        "date": {
            "year": 2019,
            "month": 10,
            "dateDay": 10,
            "hour": 18,
            "min": 43,
            "sec": 24,
            "weekDay": "Sunday"
        },
        "type": "todo",
        "data": {
            "headline": "fsefef",
            "todos": [{
                "num": 1,
                "done": true,
                "text": "ewfewfwefe"
            }, {
                "num": 1,
                "done": false,
                "text": "ewfewfwefe"
            }, {
                "num": 1,
                "done": false,
                "text": "ewfewfwefe"
            }, {
                "num": 1,
                "done": true,
                "text": "ewfewfwefe"
            }, {
                "num": 1,
                "done": false,
                "text": "ewfewfwefe"
            }]
        },
        "color": "#ff9555",
        "order": false,
        "numOfTodos": 1
    }
]


function emptyNote() {
    return {
        id: utilService.makeId(),
        date: utilService.getCurrentTime(),
        type: 'textComp',
        text: {
            headline: '',
            body: '',
        },
        color: null,
        order: false
    }
}

function addNote(note) {
    gNotes.unshift(note)
    // console.log('the updated gNotes now looks like this: ', gNotes)
    utilService.saveToStorage(STORAGE_KEY, gNotes);
}



function getNotes() {
    var notes = utilService.loadFromLocalStorage(STORAGE_KEY)
    if (!notes || notes.length === 0) {
        console.log('the notes service got here')
        notes = gNotes
        utilService.saveToStorage(STORAGE_KEY, gNotes)
    }
    gNotes = notes;
    return Promise.resolve(gNotes);

}



export function deleteNote(noteid) {
    const noteToDelet = getNoteIdx(noteid)
    gNotes.splice(noteToDelet, 1)
    utilService.saveToStorage(STORAGE_KEY, gNotes);
}

export function copyNote(note) {
    gNotes.unshift(note)
    utilService.saveToStorage(STORAGE_KEY, gNotes);
}

function getNoteIdx(noteid) {
    return gNotes.findIndex(note => {
        return note.id === noteid
    });
}

export function updateColor(val, note) {
    note.color = val;
    utilService.saveToStorage(STORAGE_KEY, gNotes);
}

export function removePin(note) {
    note.order = false;
    utilService.saveToStorage(STORAGE_KEY, gNotes);
}

export function addPin(note) {
    note.order = true;
    utilService.saveToStorage(STORAGE_KEY, gNotes);
}

export function updateNote(note, body, headline) {
    note.text.body = body;
    note.text.headline = headline
    utilService.saveToStorage(STORAGE_KEY, gNotes);
}
export function updateTodo(note, body, headline) {
    note.data.headline = body;
    note.data.todo.text = headline
    utilService.saveToStorage(STORAGE_KEY, gNotes);
}

export function updateTodoItem(note, i) {
    note.data.todos[i].done = !note.data.todos[i].done;
    utilService.saveToStorage(STORAGE_KEY, gNotes);
}

function emptyTodo() {
    return {
        id: utilService.makeId(),
        date: utilService.getCurrentTime(),
        type: 'todo',
        data: {
            headline: '',
            todos: [{
                num: 1,
                done: false,
                text: ''
            }, ]
        },
        color: null,
        order: false,
        numOfTodos: 1
    }

}


//     id: utilService.makeId(),
//     date: utilService.getCurrentTime(),
//     type: 'textComp',
//     text: {
//         headline: 'learn Vue',
//         body: 'next weekEnd',
//     },
//     color: '#ffffff',
//     order: 0
// },
// {
//     id: utilService.makeId(),
//     date: utilService.getCurrentTime(),
//     type: 'textComp',
//     text: {
//         headline: 'going to meetUp in tel aviv ',
//         body: 'on sunday at 18:00',
//     },
//     color: '#ffffff',
//     order: -1
// },
// {
//     id: utilService.makeId(),
//     date: utilService.getCurrentTime(),
//     type: 'textComp',
//     text: {
//         headline: 'shopping',
//         body: 'in rami levi',
//     },
//     color: '#ff0000',
//     order: 0
// },