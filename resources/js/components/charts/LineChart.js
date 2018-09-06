import {Line} from 'vue-chartjs'

export default {
    extends: Line,
    mounted () {
        this.renderChart({
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'Money Transfer',
                    backgroundColor: 'rgba(243, 210, 80, 0.7)',
                    data: [40, 39, 10, 40, 39, 80, 40]
                },{
                    label: 'BBPS',
                    backgroundColor: 'rgba(144, 204, 244, 0.7)',
                    data: [60, 55, 32, 10, 2, 12, 53]
                },
                {
                    label: 'Travel Booking',
                    backgroundColor: 'rgba(247, 136, 136, 0.7)',
                    data: [12, 30, 32, 70, 20, 120, 2]
                },
                ]
        }, {responsive: true, maintainAspectRatio: false})

    }
}