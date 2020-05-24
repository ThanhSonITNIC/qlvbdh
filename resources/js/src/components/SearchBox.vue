<template>
    <CRow>
        <CCol sm="3">
            <CSelect
                :options="fields"
                @update:value="fieldChanged"
            />
        </CCol>
        <CCol sm="9">
            <CInput 
                placeholder="Tìm kiếm"
                @update:value="valueChanged"
            />
        </CCol>
    </CRow>
</template>

<script>
    export default {
        name: 'SearchBox',
        props: {
            fields: {
                type: Array,
                default: function(){
                    return [{ value: '', label: 'Tất cả'}]
                },
            },
        },
        data() {
            return {
                field: String,
                value: String,
            }
        },
        watch: {
            field: {
                handler(value){
                    this.$emit('fieldChanged', value)
                }
            },
            value: {
                handler(value){
                    this.$emit('valueChanged', value)
                }
            },
        },
        methods: {
            fieldChanged(value){
                this.field = this.fields.find(e => { return e.value == value})
            },
            valueChanged(value){
                this.value = value
            }
        }
    }
</script>
