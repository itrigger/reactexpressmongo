import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';

const Mainpage = (props) => {
    return (
        <section class="container">
            <div class="bs-docs-section clearfix">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="page-header">
                            <h1>Главная страница</h1>
                        </div>

                        <table class='table table-striped table-dark'>
                            <tr>
                                <th>Id</th>
                                <th>Локация</th>
                                <th>Номер</th>
                                <th>Канал</th>
                                <th></th>
                            </tr>

                            <tr>
                            <td> tvs._id </td>
                            <td> tvs.place ></td>
                            <td> tvs.number </td>
                            <td> tvs.channel </td>
                            <td>
                            <div class="float-left m-1">
                            <a href="/play/<%= tvs._id %>?place=<%= tvs.place %>&num=<%= tvs.number %>&channel=<%= tvs.channel %>" class="btn btn-warning"><i class="fas fa-play"></i></a>
                            </div>
                            </td>
                            </tr>

                        </table>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Mainpage;