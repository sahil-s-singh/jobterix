import React, {useCallback, useState, useMemo } from 'react'
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import PropTypes from 'prop-types';
import Classnames from 'classnames';
import {useFieldArray, useWatch } from "react-hook-form";
import deleteIcon from '../images/deleteIcon.svg'
import './customSelect.scss'

function CustomSelect(props){
const { 
  options,
  control, 
  register, 
  errors, 
  name,
  fieldName,
  trigger,
  save,
  title = 'Title',
  subTitle = 'SubTitle',
  fieldOneLabel = 'label1',
  fieldTwoLabel = 'label2',
  addButtonLabel = `+ Add a new language`,
  clearErrors
} = props;

  const [show, setShow] = useState(false);
  const [validated, setValidated] = React.useState(false);
  const handleClose = () => {
    save(name, control.defaultValuesRef.current[name]);
    setShow(false)
  };
  const handleShow = () => {
    errors?.[name] &&  clearErrors(name)
    setShow(true)
  };

console.log(name, 'namenamename')

  const { fields, remove, append } = useFieldArray({
    control,
    name
  });
  const value = useWatch({
    control,
    name
  });
  const add = async() => {
    const idx = fields.length ? fields.length-1 : 0;
    await trigger(`${name}[${idx}].${fieldName}`);
    !errors[name]&&[idx] && append();
  };
  const removeFn = index => () => remove(index)
  const saveFn = async()=>{
    const idx = fields.length ? fields.length-1 : 0
    await trigger(`${name}[${idx}].${fieldName}`);
    !errors[name]&&[idx] && save(name, value)
  }

  const registeredOnChange = useMemo (
    () => {
      const fieldsMap = fields.map((field, index) => {
        const fieldNamePrefix = `${name}[${index}]`;
        const fieldNameChange = register(`${fieldNamePrefix}.${fieldName}`, {required: true});
        const levelChange = register(`${fieldNamePrefix}.level`, {required: true});
        return {
          [fieldNamePrefix] : {
            fieldNameChange,
            levelChange,
          }
        }
      });
      return fieldsMap.reduce((obj, field) => ({ ...obj, ...field }), {});
    },
    [fields, register],
  );
 console.log('yo!', registeredOnChange);
  return(
    <>
    
    <div onClick={handleShow} className={Classnames('form-control field-container', {"is-invalid": Boolean(errors?.[name])})}>
      {control.defaultValuesRef && control.defaultValuesRef.current[name] && control.defaultValuesRef.current[name].map((i, idx)=>
        (<span className='select-item' key={idx}>{i[fieldName]}</span>)
      )}
      </div>
      <Modal dialogClassName='' contentClassName='modal-content-extend' show={show} onHide={handleClose}>
        <Modal.Header bsPrefix='header'>
          <Modal.Title>{title}</Modal.Title>
          <Modal.Title as={'p'}>{subTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Row className='modal-body-inner'>
            {fields.map((item, index) => {
              const fieldNamePrefix = `${name}[${index}]`;
              return (
                <fieldset name={fieldNamePrefix} key={item.id}>
                  <Row  className="mb-4">
                    <Form.Group className='d-flex flex-column align-items-start p-0 pe-2' as={Col}>
                    {index === 0  && <Form.Label className='mb-2'>{fieldOneLabel}</Form.Label>}
                    <Form.Control 
                      id={`${fieldNamePrefix}.${fieldName}`}
                      name={`${fieldNamePrefix}.${fieldName}`}
                      {...registeredOnChange[fieldNamePrefix].fieldNameChange}
                      type="text"
                      placeholder="Enter skill"
                      className={Classnames('form-control', {"is-invalid": Boolean(errors?.[name]?.[index]?.[fieldName])})}
                    />
                  </Form.Group>
                  <Form.Group className='d-flex flex-column align-items-start p-0 pe-2' as={Col} >
                  {index === 0  && <Form.Label className='mb-2'>{fieldTwoLabel}</Form.Label>}
                    <select
                      className={Classnames('form-select', {"is-invalid": Boolean(errors?.[name]?.[index]?.level)})}
                      id={`${fieldNamePrefix}.level`}
                      {...registeredOnChange[fieldNamePrefix].levelChange}
                    >
                      {options.map((i, idx) => (
                        <option value={i.value} key={idx}>{i.label}</option>
                      ))}
                    </select>
                  </Form.Group>
                  <Form.Group onClick={removeFn(index)} className='d-flex flex-column justify-content-end iconContainer p-0 ps-2 mb-3' controlId="delete">
                    <img src={deleteIcon} height='16' width='16' />
                  </Form.Group>
                  </Row>
                </fieldset> 
              )})}
              <Form.Group className='d-flex flex-column align-items-start' as={Col} controlId="experience">
              <button className="button-custom btn btn-lg btn-block rounded-0 " type="button" onClick={add}>{addButtonLabel}</button>
              </Form.Group>
           
          </Row>
        </Modal.Body>
        <Modal.Footer bsPrefix='button-container modal-footer pb-0 border-0'>
          <Button className='text-uppercase' variant="outline-primary"  onClick={handleClose}>
            Close
          </Button>
          <Button onClick={saveFn} type='button' variant="primary">
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

CustomSelect.propTypes = {
  options: PropTypes.array.isRequired,
  control: PropTypes.any,
  trigger: PropTypes.any,
  register: PropTypes.func.isRequired,
  save: PropTypes.func.isRequired,
  errors: PropTypes.any,
  name: PropTypes.string.isRequired,
  fieldName: PropTypes.string.isRequired,
  fieldOneLabel: PropTypes.string,
  fieldTwoLabel: PropTypes.string,
  addButtonLabel: PropTypes.string,
  subTitle: PropTypes.string,
  title: PropTypes.string,
  clearErrors: PropTypes.any
}

export default CustomSelect;